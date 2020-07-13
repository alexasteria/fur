import React, { useState, useEffect } from 'react';
import {CardGrid, Card, Group, FormLayout, Radio, Header, CellButton} from '@vkontakte/vkui';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import App from "../App";

const Add = () => {
    return (
        <React.Fragment>
        <Group separator="hide">
            <CardGrid>
                <Card size="s">
                    <div style={{ height: 96 }} />
                </Card>
                <Card size="s">
                    <div style={{ height: 96 }} />
                </Card>
                <Card size="s">
                    <div style={{ height: 96 }} />
                </Card>
            </CardGrid>
        </Group>
            <FormLayout>
                <div>
                    <Radio name="radio" value="1" description="Тренога" defaultChecked>Передвижная камера</Radio>
                    <Radio name="radio" value="2" description="Стационарный">Пост ДПС</Radio>
                    <Radio name="radio" value="3" description="Проверки и спецоперации">Мобильная группа ДПС</Radio>
                </div>
            </FormLayout>
            <Group header={<Header mode="secondary">Завершите добавление</Header>}>
                <CellButton before={<Icon24Add />}>Добавить на карту</CellButton>
            </Group>
        </React.Fragment>
    )
};

export default Add;