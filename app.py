from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:1wal!col?33@localhost:5000/emerson_db'
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(256), unique=True, nullable=False)
    email = db.Column(db.String(256), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable=False)

    def __init__(self, username, email):
        self.username = username
        self.email = email

    def __repr__(self):
        return '<User %r>' % self.username


class NewsArticle(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(256), unique=True, nullable=False)
    content = db.Column(db.String(256), unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    user = db.relationship("User", backref=db.backref("newsarticles", lazy=True))

    def __repr__(self):
        return '<NewsArticle %r>' % self.title


class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(256), unique=True, nullable=False)
    location = db.Column(db.String(256), unique=True, nullable=False)
    date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    link = db.Column(db.String(256))
    remarks = db.Column(db.String(256))
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    user = db.relationship("User", backref=db.backref("events", lazy=True))

    def __repr__(self):
        return '<Event %r>' % self.name


class AppText(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    keyword = db.Column(db.String(256), unique=True, nullable=False)
    text = db.Column(db.String(256), unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    user = db.relationship("User", backref=db.backref("apptexts", lazy=True))

    def __init__(self, keyword, text):
        self.keyword = keyword
        self.text = text

    def __repr__(self):
        return '<AppText %r>' % self.keyword


class Video(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    embeded_link = db.Column(db.String(256), unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    user = db.relationship("User", backref=db.backref("videos", lazy=True))

    def __repr__(self):
        return '<Video %r>' % self.embeded_link

@app.route("/")
def main():
    return render_template("index.html")

@app.route("/about")
def about():
    text = AppText.query.first()
    print(text.keyword)
    return render_template("about.html")

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

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=80)
