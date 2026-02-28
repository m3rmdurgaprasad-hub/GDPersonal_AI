import os

def save_uploaded_file(upload_file, destination: str):
    with open(destination, "wb") as buffer:
        buffer.write(upload_file.file.read())
    return destination

def get_env_variable(name: str, default=None):
    return os.getenv(name, default)
