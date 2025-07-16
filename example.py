# example.py
import subprocess

def bad_code(user_input):
    # This will trigger a command injection rule
    subprocess.call("ls " + user_input, shell=True)
