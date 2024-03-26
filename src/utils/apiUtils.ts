import { toast } from "react-toastify";

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
        // Вывод уведомления при корректном url и 200 OK
        toast.info("Данные успешно отправлены на сервер");
        return;
      }
      if (retries <= 0) {
        // Вывод уведомнелия при ошибке сервера или неправильных даннх
        toast.error(`Ошибка при отправке данных на сервер ${response.status}`);
        return;
      }
      // Через 2 секунды пытаемся ещё раз отправить данные
      setTimeout(() => {
        sendRequest(url, data, retries - 1);
      }, 2000);
    })
    .catch((error) => {
      // Вывод уведомления при некорректном url
      toast.error(`Ошибка при отправке данных на сервер ${error}`);
    });
};

export default sendRequest;
