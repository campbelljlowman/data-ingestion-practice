up-kafka:
	docker compose up

delete-topic-%:
	docker exec kafka kafka-topics.sh --bootstrap-server kafka:9092 --delete --topic $*