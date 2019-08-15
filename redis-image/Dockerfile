#Usa uma imagem existente como base
FROM alpine

#Baixa e instala uma dependência
RUN apk add --update redis

#Comando que a imagem executa primeiro quando inicializa
CMD ["redis-server"]
