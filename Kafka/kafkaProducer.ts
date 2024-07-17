import { sleep } from 'bun'
import { Kafka } from 'kafkajs'

const kafkaClient = new Kafka({clientId: 'data-ingestion-kafka-producer', brokers: ['localhost:9092']})
const kafkaProducer = kafkaClient.producer()
await kafkaProducer.connect()

let counter = 0
while(true) {

    await kafkaProducer.send({
        topic: 'location',
        messages: [
            {value: counter.toString()}
        ]
    })

    counter ++;
    await sleep(1000);
}
