from flask_login import UserMixin

from app import db
from datetime import datetime


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(256), unique=True, nullable=False)
    email = db.Column(db.String(256), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable=False)
    active = db.Column("is_active", db.Boolean(), nullable=False, server_default="0")

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
    site = db.Column(db.String(256), nullable=False)
    text = db.Column(db.String(256), unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    user = db.relationship("User", backref=db.backref("apptexts", lazy=True))

    def __init__(self, keyword, text, site, user_id):
        self.keyword = keyword
        self.text = text
        self.site = site
        self.user_id = user_id

    def __repr__(self):
        return '<AppText %r>' % self.keyword


class Video(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    embeded_link = db.Column(db.String(256), unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    user = db.relationship("User", backref=db.backref("videos", lazy=True))

    def __repr__(self):
        return '<Video %r>' % self.embeded_link