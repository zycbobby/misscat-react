FROM google/nodejs

RUN mkdir app
RUN cd app && mkdir dist
RUN cd app && mkdir server

ADD ./dist /app/dist
ADD ./server /app/server
ADD ./package.json /app/

WORKDIR /app

RUN npm install --production

ENV PORT 9000
ENV NODE_ENV production

expose 9000

CMD ["/nodejs/bin/npm", "start"]
