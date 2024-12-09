#!/usr/bin/env bash

echo "Avvio del backend Django..."

(
    cd backend               # entro nella cartella backend
    source .venv/Scripts/activate  # attivo l'ambiente virtuale
    cd backend               # entro nella cartella del progetto Django
    echo "Ambiente virtuale attivato. Avvio il server Django..."
    python manage.py runserver &   # avvio il server Django in background
)

echo "Server Django avviato in background."
echo "Avvio del frontend React..."

(
    cd frontend   # entro nella cartella del frontend
    echo "Avvio del server di sviluppo React..."
    npm start     # avvio il frontend React
)
