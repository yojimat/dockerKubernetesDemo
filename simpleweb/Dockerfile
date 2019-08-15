#Especificando uma imagem base
FROM node:alpine

#Comando que define a pasta raiz para realizar comandos e copiar arquivos, caso a pasta não exista a mesma sera criada 
WORKDIR /usr/app

#Comando para instalar dependências
COPY ./package.json ./
RUN npm install

#Comando copy para otimização do build, neste caso primeiro copiamos apenas o arquivo que precisamos para instalar a dependência. 
#Depois copiamos o resto do projeto,e assim o build ficara mais rápido, ja que o docker ira pegar o cache dos
#comando passados e irá executar de novo a partir do comando que mudou até o ultimo comando.
COPY ./ ./

#Comando que é executado quando container eh inicializado
CMD ["npm", "start"]