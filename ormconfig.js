module.exports =  {
    "type": process.env.DATABASE_TYPE,
    "host": process.env.DATABASE_HOST,
    "port": process.env.DATABASE_PORT,
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "synchronize": false,
    "logging": false,
    "entities": [
       "dist/**/entities/*.entity.{ts,js}"
    ],
    "migrations": [
       "dist/migration/**/*.{js,ts}"
    ],
    "subscribers": [
       "src/subscriber/**/*.{js,ts}"
    ],
   //  specify the directory with which all our migration, entity and subscription files will be created when we run their respective cli command
    "cli": {
       "entitiesDir": "src/entity",
       "migrationsDir": "src/migration",
       "subscribersDir": "src/subscriber"
    }
 }