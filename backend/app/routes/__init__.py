from flask import Blueprint

def register_routes(app):
    # Import and register each blueprint
    from app.routes.physiotherapy import physiotherapy_bp
    app.register_blueprint(physiotherapy_bp)
