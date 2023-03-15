# Тесты
[![my-tests](https://github.com/Felarn/frontend-project-46/actions/workflows/my-tests.yml/badge.svg)](https://github.com/Felarn/frontend-project-46/actions/workflows/my-tests.yml) <span style="font-size: 18px;"> - Мои проверки</span>

[![Actions Status](https://github.com/Felarn/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Felarn/frontend-project-46/actions) <span style="font-size: 18px;"> - Hexlet tests and linter status.</span>

[![Maintainability](https://api.codeclimate.com/v1/badges/4b558dec7ce816334c44/maintainability)](https://codeclimate.com/github/Felarn/frontend-project-46/maintainability) <span style="font-size: 18px;"> - Maintainability от Codeclimate.</span>

[![Test Coverage](https://api.codeclimate.com/v1/badges/4b558dec7ce816334c44/test_coverage)](https://codeclimate.com/github/Felarn/frontend-project-46/test_coverage) <span style="font-size: 18px;"> - Test coverage от Codeclimate.</span>

# Описание
Это второй учебный проект от Hexlet - "Вычислитель различий" - программа, определяющая разницу между двумя структурами данных.

Возможности утилиты:
Поддержка разных входных форматов: yaml, json
Генерация отчета в виде plain text, stylish и json

Пример использования:
```
# формат plain
gendiff --format plain path/to/file.yml another/path/file.json

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed

# формат stylish
gendiff filepath1.json filepath2.json

{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}
```