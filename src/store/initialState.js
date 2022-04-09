export const initialState = {
    locale: 'en',
    query: '',
    projects: [
        {
            name: 'DZ-Helper',
            description: {
                en: "A service for solving homework for schoolchildren and students.",
                ru: "Сервис для помощи в выполнении домашних заданий для школьников и студентов."
            },
            style: {
                backgroundColor: '#149DCC',
                boxShadow: 'rgba(20, 157, 204, 0.68) 0 0 1rem 2px'
            },
            linkTo: {
                url: 'https://dz-helper.ru',
                name: {
                    en: 'Homepage',
                    ru: 'Открыть сайт'
                },
            }
        },
        {
            name: 'Sibirskiy Konditer',
            description: {
                en: "Website for a confectionery store.",
                ru: "Вебсайт для магазина кондитерских товаров, работа на заказ."
            },
            style: {
                backgroundColor: '#FFC200',
                boxShadow: 'rgba(255, 194, 0, 0.68) 0 0 1rem 2px'
            },
            linkTo: {
                url: 'https://sibirskiy-konditer-uu.ru',
                name: {
                    en: 'Homepage',
                    ru: 'Открыть сайт'
                },
            }
        },
        {
            name: 'Explrms Page',
            description: {
                en: "This own page :D",
                ru: "Эта самая страница :D"
            },
            style: {
                backgroundColor: '#7ec715',
                boxShadow: 'rgba(126, 199, 21, 0.68) 0 0 1rem 2px'
            },
            linkTo: {
                url: 'https://github.com/explrms/explrms-page',
                name: {
                    en: 'GitHub',
                    ru: 'GitHub'
                },
            }
        },
        {
            name: 'SaveOurAss VPN',
            description: {
                en: "My VPN service for bypassing Internet blocking.",
                ru: "Мой VPN сервис для обхода блокировок."
            },
            style: {
                backgroundColor: '#014366',
                boxShadow: 'rgba(67, 102, 100, 0.68) 0 0 1rem 2px'
            },
            linkTo: {
                url: 'https://t.me/saveourass',
                name: {
                    en: 'Open in Telegram',
                    ru: 'Открыть в Телеграм'
                },
            }
        }
    ]
}