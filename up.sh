#!/bin/bash

# Compilamos la versión de distribution
node docs/bundle.js

# Solicitar el mensaje del commit
read -p "Escribe el mensaje del commit: " commit_message

# Ejecutar git add, git commit y git push
git add .
git commit -m "$commit_message"
git push

# Confirmar que se completaron los pasos
if [ $? -eq 0 ]; then
  echo "Cambios añadidos, commiteados y enviados correctamente."
else
  echo "Hubo un problema durante la ejecución."
fi