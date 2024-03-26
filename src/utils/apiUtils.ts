interface RequestData {
  firstField: number[];
  secondField: number[];
  isTicketWon: boolean;
}

type SendRequestFunction = (
  url: string,
  data: RequestData,
  retries?: number
) => void;

const sendRequest: SendRequestFunction = (url, data, retries = 2) => {
  // fetch запрос на url с данными
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Данные успешно отправлены на сервер");
        return;
      }
      // Повторная отправка данных
      if (retries <= 0) {
        // Логируем ошибку при ошибке сервера или неправильных даннх
        console.error("Ошибка при отправке данных на сервер", response.status);
        return;
      }
      console.log(
        `Повторная попытка отправки через 2 секунды. Осталось попыток: ${retries}`
      );
      setTimeout(() => {
        // Через 2 секунды делаем ещё раз запрос
        sendRequest(url, data, retries - 1);
      }, 2000);
    })
    .catch((error) => {
      // Логируем ошибку при некорректном url
      console.error("Ошибка при отправке данных на сервер:", error);
    });
};

export default sendRequest;
