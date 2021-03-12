# Яндекс.Практикум / Проект Mesto
![Mesto](https://pictures.s3.yandex.net/resources/Screen_Shot_2020-04-06_at_6.36.00_PM_1589715787.png "Mesto")

### Задачи
01. Настроить сборку проекта Вебпаком
02. Верстка должна попиксельно совпадать с [макетом](https://www.figma.com/file/StZjf8HnoeLdiXS7dYrLAh/JavaScript.-Sprint-4)
03. Шрифты должны быть подключены локально, изображения оптимизированы
04. Контент должен легко читаться спомощью скринридера
05. Именование классов и файловая структура реализованы в соответствии с БЭМ
06. Корректное отображение на экранах разных размеров
07. Реализовать возможность менять изображение аватара через форму в попапе
08. Реализовать возможность менять информацию пользователя через форму в попапе
09. Реализовать возможность добавлять изображение, ставить ему лайк или удалять
10. При открытии страницы показывать добавленные изображения всех пользователей
11. При клике на карточку изображения показывать попап с полноразмерным изображением и подписью
12. Настроить валидацию формы
13. Настроить закрытие попапов по клику на Х, Overlay, нажатию на ESC

### Технологии проекта

`HTML5`, `CSS3`, `CSS Flexbox`, `BEM Nested`, `JavaScript`

### Решение
1. Устанавливаем зависимости, пишем конфиги. Для разработки нам понадобится: сам сборщик webpack, интерфейс командной строки для webpack, сервер для разработки, очистка проекта перед сборкой, плагин, подключающий html файл, загрузчик css файлов подключенных через @import и url(), плагин объединяющий css файлы, загрузчик PostCSS и несколько его расширений, Babel транспилятор, а вместе с ним набор правил преобразования, полифилы и загрузчик, плагин для публикации на gh-pages. Для итогового проекта нам понадобятся только полифилы npm i core-js --save.
2. Собирем каркас страницы, используя семантичные теги, добавляем alt изображениям, aria-label кнопкам иконкам и инпутам, проверяем через валидатор, слушаем через скринридер.
3. Выделяем блоки, элементы. Создаем структуру по БЭМ. Используем PerfectPixel и пишем правила CSS.
4. Добавляем правила для медиа-запросов. Минимальная ширина: 320px. Максимальная: 1280px.

### Чему научил проект

---------
Ссылка на проект  https://marinasirenko-git.github.io/mesto/
