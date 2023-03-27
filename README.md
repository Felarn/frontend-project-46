# Тесты
[![my-tests](https://github.com/Felarn/frontend-project-46/actions/workflows/my-tests.yml/badge.svg)](https://github.com/Felarn/frontend-project-46/actions/workflows/my-tests.yml) <span style="font-size: 18px;"> - Мои проверки</span>

[![Actions Status](https://github.com/Felarn/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Felarn/frontend-project-46/actions) <span style="font-size: 18px;"> - Hexlet tests and linter status.</span>

[![Maintainability](https://api.codeclimate.com/v1/badges/4b558dec7ce816334c44/maintainability)](https://codeclimate.com/github/Felarn/frontend-project-46/maintainability) <span style="font-size: 18px;"> - Maintainability от Codeclimate.</span>

[![Test Coverage](https://api.codeclimate.com/v1/badges/4b558dec7ce816334c44/test_coverage)](https://codeclimate.com/github/Felarn/frontend-project-46/test_coverage) <span style="font-size: 18px;"> - Test coverage от Codeclimate.</span>

# Описание
Это второй учебный проект от Hexlet - "Вычислитель различий" - программа, определяющая разницу между двумя структурами данных.

Входные данные читатются из файлов с расширением .json, .yaml или .yml. Вывод производится в консоль с возможностью выделения изменений цветом. 
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

Утилита принимает следующие аргументы:
<dl>
 <dt> -f --format</dt> 
 <dd> 
    Формат вывода отчета. Возможные значения:
    <dl>
        <dt>stylish (значение по умолчанию)</dt>
        <dd>
            Cтруктурированный вывод. <a href="#anchor-stylish" >Пример -></a>
        </dd>
        <dt>plain</dt>
        <dd>
            Текствовый отчет с перечислением только изменившихся/удаленных/добавленных ключе.<a href="#anchor-plain" >Пример -></a>
        </dd>
        <dt>json</dt>
        <dd>
            Вывод в виде строки json формата. <a href="#anchor-json" >Пример -></a>
        </dd>
    </dl>
</dt>
<dt>
    -c --colorize   
</dt>
<dd>
    Флаг для раскраски вывода в терминал в зависимости от изменений внесенных в ключ. По умолчанию раскраска отключена отключен.
    <table style="width: 100%; border: 1px solid;border-collapse:collapse;text-align: center;">
        <head>
            <th></th>
            <th>stylish</th>
            <th>plain</th>
            <th>json</th>
        </head>
        <tr>
            <td>удаление</td>
            <td>$${\color{Red}красный}$$</td>
            <td>$${\color{Red}красный}$$</td>
            <td rowspan="4">$${\color{White}белый}$$</td>
        </tr>
        <tr>
            <td>изменение</td>
            <td style="color: yellow;">$${\color{yellow}желтый}$$</td>
            <td>$${\color{White}белый}$$</td>
        </tr>
        <tr>
            <td>добавление</td>
            <td style="color: green">$${\color{lightgreen}зеленый}$$</td>
            <td style="color: green">$${\color{lightgreen}зеленый}$$</td>
        </tr>
        <tr>
            <td>без изменений</td>
            <td>$${\color{White}белый}$$</td>
            <td>-</td>
        </tr>
    </table>

</dd>

<dt>path1 и path2</dt>
<dd>Адреса файлов для сравнения. Можно использовать как абсолютные так и относительные пути. Поддерживаются форматы .json, .yaml и .yml</dd>
</dl>


# Демонстрации

<p id="anchor-stylish" ></p>

### stylish

[![asciicast](https://asciinema.org/a/570675.svg)](https://asciinema.org/a/570675)

<p id="anchor-plain" ></p>

### plain

[![asciicast](https://asciinema.org/a/D8vQC1kuM9omCXzkUuRgdhyE6.svg)](https://asciinema.org/a/D8vQC1kuM9omCXzkUuRgdhyE6)


<p id="anchor-json" ></p>

### JSON

[![asciicast](https://asciinema.org/a/570685.svg)](https://asciinema.org/a/570685)
