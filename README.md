# Тесты
[![my-tests](https://github.com/Felarn/frontend-project-46/actions/workflows/my-tests.yml/badge.svg)](https://github.com/Felarn/frontend-project-46/actions/workflows/my-tests.yml) <span style="font-size: 18px;"> - Мои проверки</span>

[![Actions Status](https://github.com/Felarn/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Felarn/frontend-project-46/actions) <span style="font-size: 18px;"> - Hexlet tests and linter status.</span>

[![Maintainability](https://api.codeclimate.com/v1/badges/4b558dec7ce816334c44/maintainability)](https://codeclimate.com/github/Felarn/frontend-project-46/maintainability) <span style="font-size: 18px;"> - Maintainability от Codeclimate.</span>

[![Test Coverage](https://api.codeclimate.com/v1/badges/4b558dec7ce816334c44/test_coverage)](https://codeclimate.com/github/Felarn/frontend-project-46/test_coverage) <span style="font-size: 18px;"> - Test coverage от Codeclimate.</span>

# Описание
Это второй учебный проект от Hexlet - "Вычислитель различий" - программа, определяющая разницу между двумя структурами данных.

В ходные данные читатются из файлов с расширением .json, .yaml или .yml. Вывод производится в консоль с возможностью выделения изменений цветом. 
Отчет можно формировать в виде текстового описания изменений, структурированного вывода или строки в json-формате. Подробнее в разделе <a href="#game-description" >Использование -></a>

# Установка
<ol>
    <li>Склонировать репозиторий</li>
    <li>Выполнить команду make install</li>
</ol>

```
git clone git@github.com:Felarn/frontend-project-46.git
cd frontend-project-46/
make install
```

[![asciicast](https://asciinema.org/a/570608.svg)](https://asciinema.org/a/570608)

<p id="game-description" ></p>

# Использование

принимает опции:
-f --format - формат вывода отчета. Принимает значения: -stylish - значение по умолчанию, структурированный вывод. -plain - вывод текствового отчета в котором упоминаются только изменившиеся/удаленные/добавленные ключи. -json - вывод в виде строки json формата.

-c --colorize - флаг для выделения изменений цветом. По умолчанию отключен. Цвета для формата stylish: удаленные ключи - красный, измененные - желтый, добавленные - зеленый, неизменные ключи - белый. Для формата plain: удаленные ключи - красный, добавленные - зеленый, измененные - белый. Формат json не раскрашивается.

```
$ gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version       output the version number
  -c --colorize       colorize terminal output
  -f --format <type>  output format
  -h, --help          display help for command
```