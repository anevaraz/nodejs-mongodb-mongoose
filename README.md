# NodeJS MongoDB Mongoose

:heavy_check_mark: Clone repository

      https://github.com/anevaraz/nodejs-mongodb-mongoose.git

:heavy_check_mark: running de docker-compose.yml

  running docker-compose

  >> docker-compose up -d

  looking log

  >> docker-compose log

  stoping docker-compose

  >> docker-compose down

:heavy_check_mark: Project running at:

  *http://localhost:4000*

:heavy_check_mark: MongoDB running at:

  *http://localhost:27017*

:heavy_check_mark: Import file "import_insomnia_workspace" into Insomnia.

## Routes

### GET

  /user

  * This route list all.

  /user/*_id*

  * This route list user by *_id*.

### POST
  
  /user

    use this schema to make a body request:

    {
      name: String,
      taxvat: String,
      brithday: String,
      gender: String,
      type: String,
      work: [{
        employer: {
          description: String,
          robots: String
        },
        start_date: String,
        end_date: String
      }]
    }

  * This route add user.

### PUT
  
  /user/*_id*

    use this schema to make a body request:

    {
      name: String,
      taxvat: String,
      brithday: String,
      gender: String,
      type: String,
      work: [{
        employer: {
          description: String,
          robots: String
        },
        start_date: String,
        end_date: String
      }]
    }

  * This route update a user by *_id*.

### DELETE

  /user/*_id*

  * This route delete user by *_id*.
