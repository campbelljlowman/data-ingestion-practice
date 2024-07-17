import { Kafka } from 'kafkajs'

const kafkaClient = new Kafka({clientId: 'data-ingestion-kafka-producer', brokers: ['localhost:9092']})
const kafkaConsumer = kafkaClient.consumer({ groupId: 'ingestion' })

await kafkaConsumer.connect()
await kafkaConsumer.subscribe({ topic: 'location', fromBeginning: true })

await kafkaConsumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message!.value!.toString(),
      })
    },
  })