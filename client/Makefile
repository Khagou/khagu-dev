build-local:
	docker build \ -t react-app-production:local \ --build-arg CADDYFILE=Caddufile.local \ --build-arg BASE_URL=htttp://localhost:5500/api \ -f Dockerfile.production .

build-prod:
	docker build \
	-t react-app-production:production \
	--build-arg CADDYFILE=Caddufile.production \
	--build-arg BASE_URL=htttps://khagu-dev.fr/api \
	-f Dockerfile.production .