# Tests
[![my-tests](https://github.com/Felarn/frontend-project-46/actions/workflows/my-tests.yml/badge.svg)](https://github.com/Felarn/frontend-project-46/actions/workflows/my-tests.yml) <span style="font-size: 18px;"> - Мои проверки</span>

[![Actions Status](https://github.com/Felarn/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Felarn/frontend-project-46/actions) <span style="font-size: 18px;"> - Hexlet tests and linter status.</span>

[![Maintainability](https://api.codeclimate.com/v1/badges/4b558dec7ce816334c44/maintainability)](https://codeclimate.com/github/Felarn/frontend-project-46/maintainability) <span style="font-size: 18px;"> - Maintainability от Codeclimate.</span>

[![Test Coverage](https://api.codeclimate.com/v1/badges/4b558dec7ce816334c44/test_coverage)](https://codeclimate.com/github/Felarn/frontend-project-46/test_coverage) <span style="font-size: 18px;"> - Test coverage от Codeclimate.</span>

# Description
This is the second training project from Hexlet - "Differense calculator" - the programm to determine differense between two data structures.
Это второй учебный проект от Hexlet - "Вычислитель различий" - программа, определяющая разницу между двумя структурами данных.

Input data is read from files with extensions .json, .yaml или .yml. Output is made to console with option to colorize output.
Multiple output formats are supported: plain text, structured with indentations and json. More details in section <a href="#game-description" >Usage -></a>

# Installation
<ol>
    <li>clone repository</li>
    <li>run command "make install"</li>
</ol>

```
git clone git@github.com:Felarn/frontend-project-46.git
cd frontend-project-46/
make install
```

[![asciicast](https://asciinema.org/a/570608.svg)](https://asciinema.org/a/570608)

<p id="game-description" ></p>

# Usage

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

When called from console inputs are:
<dl>
 <dt> -f --format</dt> 
 <dd> 
    Report format. Possible values:
    <dl>
        <dt>stylish (default option)</dt>
        <dd>
            Structured output. <a href="#anchor-stylish" >Sample -></a>
        </dd>
        <dt>plain</dt>
        <dd>
            Report in plain text. List includes only changed, added or deleted keys, unchanged keys are skipped. <a href="#anchor-plain" >Sample-></a>
        </dd>
        <dt>json</dt>
        <dd>
            Output in json format. <a href="#anchor-json" >Sample -></a>
        </dd>
    </dl>
</dt>
<dt>
    -c --colorize   
</dt>
<dd>
    Flag to colorize  of console output depending of changes made to key (turned off by default)
    Color code:
    <table style="width: 100%; border: 1px solid;border-collapse:collapse;text-align: center;">
        <head>
            <th></th>
            <th>stylish</th>
            <th>plain</th>
            <th>json</th>
        </head>
        <tr>
            <td>removal</td>
            <td>$${\color{Red}Red}$$</td>
            <td>$${\color{Red}Red}$$</td>
            <td rowspan="4">$${\color{White}White}$$</td>
        </tr>
        <tr>
            <td>change</td>
            <td style="color: yellow;">$${\color{yellow}yellow}$$</td>
            <td>$${\color{White}White}$$</td>
        </tr>
        <tr>
            <td>addition</td>
            <td style="color: green">$${\color{lightgreen}green}$$</td>
            <td style="color: green">$${\color{lightgreen}green}$$</td>
        </tr>
        <tr>
            <td>no change</td>
            <td>$${\color{White}White}$$</td>
            <td>-</td>
        </tr>
    </table>
</dd>
    
<dt>path1 и path2</dt>
<dd>Path to files to tompare. Both absolute and relative paths are exaptable. Supported file extensions .json, .yaml и .yml</dd>
</dl>

<p>
Function call arguments are:</br>
gendiff(path1, path2 [, formatStyle = 'stylish'[, colorize = false]])</br>
where:
<ul>
    <li>path1 и path2 - strings containing file paths;</li>
    <li>formatStyle - output format - string with possible arguments: 'stylish', 'plain' и 'json';</li>
    <li>colorize - раскраска консольного вывода - логическое значе.</li>
</ul>
</p>

# Demo

<p id="anchor-stylish" ></p>

### stylish

[![asciicast](https://asciinema.org/a/570675.svg)](https://asciinema.org/a/570675)

<p id="anchor-plain" ></p>

### plain

[![asciicast](https://asciinema.org/a/D8vQC1kuM9omCXzkUuRgdhyE6.svg)](https://asciinema.org/a/D8vQC1kuM9omCXzkUuRgdhyE6)


<p id="anchor-json" ></p>

### JSON

[![asciicast](https://asciinema.org/a/570685.svg)](https://asciinema.org/a/570685)
