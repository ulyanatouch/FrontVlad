// FETCH СПЕЦИАЛЬНЫЙ МЕТОД
// ОТПРАВЛЯЕТ ЗАПРОС НА СЕРВЕР
// GET - получаем данные с сервера
// метод fetch возвращает промис
// позволяет работать с асинхронным кодом
// есть какие-то задачи, которые занимают время
// запрос тяжелых данных
// запрос когда медленный

// fetch асинхронно запрашивает данные
// он не останавливают выполнения скрипта

// ответ который приходит с сервера
// у него есть встроенные методы
// в зависимости от типа данных я могу распарсить различными методами
// JSON распарсил методом .json()
// возвращать еще один промис
// следующий .then() обрабатывает предудщий промис
// ответ промиса вывожу в консоль

// document
// JSON

// Пример GET-запроса с использованием Fetch API:

fetch("https://example.com/api/data")
  //  инициирует GET-запрос к указанному URL, и, после выполнения запроса,
  // она вернет объект Promise, который представляет результат запроса (успех или ошибка).
  .then((response) => response.json()) // данные преобразуются из формата JSON,
  //который обычно используется для передачи данных между сервером и клиентом, в объект JavaScript,
  // который может быть использован в вашем приложении.
  // "fetch" автоматически парсит JSON-ответ, что облегчает работу с данными в формате JSON.
  .then((data) => {
    console.log(data); // Обработка данных, полученных от сервера
  })
  .catch((error) => {
    // Обработка ошибок
    console.error("Error:", error);
  });
