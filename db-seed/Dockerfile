FROM mongo

ARG MONGO_URL
ARG MONGO_USER
ARG MONGO_PASS

ADD index.js ./index.js

CMD mongo "mongodb://$MONGO_USER:$MONGO_PASS@$MONGO_URL" index.js