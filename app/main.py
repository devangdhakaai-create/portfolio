from fastapi import FastAPI, Request, Form
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()

app.mount("/static", StaticFiles(directory="app/static"), name="static")
templates = Jinja2Templates(directory="app/templates")

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.get("/")
def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/contact")
def contact_submit(name: str = Form(...), email: str = Form(...), message: str = Form(...)):
    print(f"New message from {name} ({email}): {message}")
    return {"status": "success", "message": "Thank you for reaching out!"}