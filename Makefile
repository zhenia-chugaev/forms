install:
	npm ci

build:
	rm -rf dist/
	npm run build

lint:
	npm run lint

publish:
	npm publish --dry-run
