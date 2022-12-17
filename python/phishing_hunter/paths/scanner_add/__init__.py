# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from phishing_hunter.paths.scanner_add import Api

from phishing_hunter.paths import PathValues

path = PathValues.SCANNER_ADD