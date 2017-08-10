from os import environ

from flask import Flask, render_template
from flask import redirect
from flask import request
from flask import session
from flask import url_for
from flask_user import SQLAlchemyAdapter, UserManager
from flask_login import login_user
from flask_sqlalchemy import SQLAlchemy

from forms import SigninForm, SignupForm

app = Flask(__name__)
app.config.from_object(environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

from models import User, AppText

db_adapter = SQLAlchemyAdapter(db, User)
user_manager = UserManager(db_adapter, app)


@app.route("/")
def main():
    return render_template("index.html")


@app.route("/about")
def about():
    app_texts = AppText.query.filter_by(site="about").all()
    return render_template("about.html", app_texts=app_texts)


@app.route("/contact")
def contact():
    return render_template("contact.html")


@app.route("/events")
def events():
    return render_template("events.html")


@app.route("/music")
def music():
    return render_template("music.html")


@app.route("/news")
def news():
    return render_template("news.html")


@app.route("/admin")
def admin():
    return render_template("admin.html")


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    form = SignupForm()

    if request.method == 'POST':
        if form.validate() == False:
            return render_template('signup.html', form=form)
        else:
            new_user = User(form.username.data, form.email.data, user_manager.hash_password(form.password.data), True)
            db.session.add(new_user)
            db.session.commit()

            session['email'] = new_user.email

            return "[1] Create a new user [2] sign in the user [3] redirect to the user's profile"

    elif request.method == 'GET':
        return render_template('signup.html', form=form)


@app.route('/signin', methods=['GET', 'POST'])
def signin():
    form = SigninForm()

    if request.method == 'POST':
        if form.validate() == False:
            return render_template('signin.html', form=form)
        else:
            user = user_manager.find_user_by_email(form.email.data)
            login_user(user)
            return redirect(url_for('admin'))

    elif request.method == 'GET':
        return render_template('signin.html', form=form)


@app.route("/app_text")
def post_app_text():
    app_text = AppText(request.form["keyword"], request.form["site"], request.form["text"], request.form["text"])
    db.session.add(app_text)
    db.session.commit()
    db.session.flush()
    return redirect(url_for("main"))


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=80)
