install:
	npm ci

build:
	rm -rf dist/
	npm run build

check:
	npm run check

lint:
	npm run lint

test:
	npm run test

coverage:
	npm run test:coverage

publish:
	npm publish --dry-run

.PHONY: coverage
