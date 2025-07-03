import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Электронный учебник
        </h1>
        <p className="text-xl text-gray-600">
          Федеральная служба исполнения наказаний
        </p>
      </div>

      <Tabs defaultValue="main" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="main" className="flex items-center gap-2">
            <Icon name="BookOpen" size={20} />
            Главная
          </TabsTrigger>
          <TabsTrigger value="test" className="flex items-center gap-2">
            <Icon name="ClipboardList" size={20} />
            Тест
          </TabsTrigger>
          <TabsTrigger value="tasks" className="flex items-center gap-2">
            <Icon name="PuzzlePiece" size={20} />
            Задачи
          </TabsTrigger>
        </TabsList>

        <TabsContent value="main" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Shield" size={24} />
                Федеральная служба исполнения наказаний (ФСИН)
              </CardTitle>
              <CardDescription>
                Основные сведения о структуре, функциях и деятельности ФСИН
                России
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Общая информация
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Федеральная служба исполнения наказаний России (ФСИН) —
                    федеральный орган исполнительной власти, осуществляющий
                    функции по выработке и реализации государственной политики и
                    нормативно-правовому регулированию в сфере исполнения
                    уголовных наказаний.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Основные задачи
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Исполнение наказаний в отношении осужденных</li>
                    <li>Содержание лиц, заключенных под стражу</li>
                    <li>Охрана и конвоирование подозреваемых и обвиняемых</li>
                    <li>Контроль за поведением условно осужденных</li>
                    <li>Социальная адаптация освобождающихся</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Структура ФСИН</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Центральный аппарат</h4>
                      <p className="text-sm text-gray-600">
                        Управления и отделы центрального подчинения
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">
                        Территориальные органы
                      </h4>
                      <p className="text-sm text-gray-600">
                        УФСИН по субъектам РФ
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Учреждения</h4>
                      <p className="text-sm text-gray-600">
                        ИК, СИЗО, ЛИУ, ВК и другие
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">
                        Образовательные учреждения
                      </h4>
                      <p className="text-sm text-gray-600">
                        Академии, институты, колледжи
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="test" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="GraduationCap" size={24} />
                Тест по теме ФСИН
              </CardTitle>
              <CardDescription>
                Проверьте свои знания, ответив на 5 вопросов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Icon
                  name="Play"
                  size={48}
                  className="mx-auto mb-4 text-blue-500"
                />
                <p className="text-lg mb-4">
                  Тест содержит 5 вопросов по основам ФСИН
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Начать тест
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Briefcase" size={24} />
                Ситуационные задачи
              </CardTitle>
              <CardDescription>
                Практические задания для закрепления знаний
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-medium mb-2">
                    Задача 1: Режим содержания
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Осужденный нарушил режим содержания в исправительной
                    колонии. Какие меры воздействия может применить
                    администрация?
                  </p>
                  <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                    Решить задачу →
                  </button>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-medium mb-2">
                    Задача 2: Условно-досрочное освобождение
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Рассмотрите ситуацию с подачей ходатайства об УДО. Какие
                    условия должны быть соблюдены?
                  </p>
                  <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                    Решить задачу →
                  </button>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-medium mb-2">
                    Задача 3: Права осужденных
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Анализ случая нарушения прав осужденного. Куда может
                    обратиться осужденный за защитой?
                  </p>
                  <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                    Решить задачу →
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Navigation;
