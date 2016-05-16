function form_view() {
    function text(type){
        switch (type){
            case 'search_work':
                return "ищите работу";
            case 'work':
                return "предлагаете работу";
            case 'no_day':
                return "неполную смену";
            case 'morning':
                return "утреннюю смену";
            case 'day':
                return "суточную смену";
            case 'yesterday':
                return "вечернюю смену";
        }
    }

    var name_vacancies = document.form_search.search;
    var type_work = document.form_search.ask_type_work;
    var smena = document.form_search.smena_work;
    var then_work = document.form_search.then_work;
    var end_work = document.form_search.end_work;
    var money = document.form_search.money;

    if (name_vacancies.value == "") {
        document.getElementById('error').innerHTML = " Вы не ввели название вакансии!";
        return false;
    }

    var res = document.getElementById('res');
    res.innerHTML = "Вы " + text(type_work.value) + " \"" + name_vacancies.value + "\"" + "<br />";
    res.innerHTML += ((type_work.value == "work" ) ? "Предлагаете работу в " : "Хотите работать в ") +  text(smena.value) + "<br />";
    res.innerHTML += "В период с " + then_work.value + " до " + end_work.value + "<br />";
    res.innerHTML += ((type_work.value == "work" ) ? "Возможная зарплата " : "Желаемая зарплата ") + money.value + " руб.";
}