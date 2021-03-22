from .base import *

DEBUG = True

ALLOWED_HOSTS = ['localhost', 'localhost:8000', '127.0.0.1', '127.0.0.1:8000']

CORS_ORIGIN_ALLOW_ALL = True

INSTALLED_APPS += [
    'debug_toolbar',
]

MIDDLEWARE += ['debug_toolbar.middleware.DebugToolbarMiddleware', ]

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

ACCOUNT_EMAIL_VERIFICATION = 'none'

DEBUG_TOOLBAR_CONFIG = {
    'JQUERY_URL': 'https://code.jquery.com/jquery-2.2.4.min.js',
}