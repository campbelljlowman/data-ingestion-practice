import cassandra from 'cassandra-driver'

const cassandraClient = new cassandra.Client({
    contactPoints: ["localhost:9042"],
    localDataCenter: 'datacenter1',
    keyspace: 'data_ingestion'
})

let result = await cassandraClient.execute('SELECT * FROM data_ingestion.location')
console.log(result)