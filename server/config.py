from dotenv import load_dotenv
import os
import redis


class ApplicationConfig:
    SECRET_KEY = "hnjuh857tye5vnijhr989879bgfvjkesh bgjethhjnh"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True
    SQLALCHEMY_DATABASE_URI = "sqlite:///./db.sqlite"

    SESSION_TYPE = "redis"
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
    SESSION_REDIS = redis.from_url("redis://127.0.0.1:6379")
