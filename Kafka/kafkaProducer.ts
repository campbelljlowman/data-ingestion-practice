import { sleep } from 'bun'
import { Kafka } from 'kafkajs'
import { faker } from '@faker-js/faker'
import avro from 'avsc';

const locationAvroSchemaFile = Bun.file('./locationAvroSchema.json')
const locationAvroSchemaJSON = await locationAvroSchemaFile.json()
const locationAvroType = avro.Type.forSchema(locationAvroSchemaJSON);

const kafkaClient = new Kafka({clientId: 'data-ingestion-kafka-producer', brokers: ['localhost:9092']})
const kafkaProducer = kafkaClient.producer()
await kafkaProducer.connect()

while(true) {
    let coordinatesArray = faker.location.nearbyGPSCoordinate()
    let coordinatesBuffer = locationAvroType.toBuffer({latitude: coordinatesArray[0], longitude: coordinatesArray[1], timestamp: Date.now()})
    
    await kafkaProducer.send({
        topic: 'location',
        messages: [
            {value: coordinatesBuffer}
        ]
    })

    await sleep(5000);
}
