FROM ubuntu:18.04
RUN apt-get update && apt-get install --yes curl
RUN curl --silent --location https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install --yes nodejs
RUN cd /src; npm install
RUN nodejs -v

COPY . /src
CMD ["node", "/src/index.js"]
