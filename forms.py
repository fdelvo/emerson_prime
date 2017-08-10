from flask_wtf import Form
from wtforms import StringField, PasswordField, SubmitField, validators

from app import user_manager
from models import User


class SignupForm(Form):
    username = StringField("Username", [validators.DataRequired("Please enter your first name.")])
    email = StringField("Email", [validators.DataRequired("Please enter your email address."),
                                validators.Email("Please enter your email address.")])
    password = PasswordField('Password', [validators.DataRequired("Please enter a password.")])
    submit = SubmitField("Create account")

    def __init__(self, *args, **kwargs):
        Form.__init__(self, *args, **kwargs)

    def validate(self):
        if not Form.validate(self):
            return False

        if self.email.data != "florian.delvo@googlemail.com":
            self.email.errors.append("That email address is not valid.")
            return False

        user = User.query.filter_by(email=self.email.data.lower()).first()
        if user:
            self.email.errors.append("That email is already taken.")
            return False
        else:
            return True


class SigninForm(Form):
    email = StringField("Email", [validators.DataRequired("Please enter your email address."),
                                validators.Email("Please enter your email address.")])
    password = PasswordField('Password', [validators.DataRequired("Please enter a password.")])
    submit = SubmitField("Sign In")

    def __init__(self, *args, **kwargs):
        Form.__init__(self, *args, **kwargs)

    def validate(self):
        if not Form.validate(self):
            return False

        user = User.query.filter_by(email=self.email.data.lower()).first()
        if user and user.check_password(user_manager.verify_password(self.password.data)):
            return True
        else:
            self.email.errors.append("Invalid e-mail or password")
            return False