FROM node:7.9.0

WORKDIR /src

ADD ./package.json /src/package.json
ADD ./bower.json /src/bower.json

RUN npm install --loglevel silent && npm install -g grunt-cli silent && npm install -g bower silent
RUN bower install --allow-root

ADD ./ /src

EXPOSE 9000

CMD ["grunt", "serve"]
