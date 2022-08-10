run-dev:
	docker-compose -f docker-compose-dev.yml up

###

build-production:
	cd client && docker build -t react-app-production -f Dockerfile.production
	cd server && docker build -t api-server .

run-production:
	ENV=production docker-compose -f docker-compose-production.yml up


run-local:
	ENV=local docker-compose up
