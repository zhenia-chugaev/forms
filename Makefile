install:
	npm ci

build:
	rm -rf dist/
	npm run build

check:
	npm run check

lint:
	npm run lint

publish:
	npm publish --dry-run
