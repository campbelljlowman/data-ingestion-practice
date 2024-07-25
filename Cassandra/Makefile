up-cassandra:
	docker compose up

init-cassandra:
	docker run --rm --network data-ingestion-practice -v "./initDatabase.cql:/scripts/initDatabase.cql" -e CQLSH_HOST=cassandra -e CQLSH_PORT=9042 -e CQLVERSION=3.4.6 nuvo/docker-cqlsh

cqlsh-cassandra:
	docker run --rm -it --network data-ingestion-practice nuvo/docker-cqlsh cqlsh cassandra 9042 --cqlversion='3.4.6'