import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, Panel, PanelHeader, Epic, Tabbar, TabbarItem } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon28Search from '@vkontakte/icons/dist/28/search';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import MapComponent from './components/map';
import Add from './components/add';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
	const [activeStory, setActiveStory] = useState("map");
	return (
		<Epic activeStory={activeStory} tabbar={
			<Tabbar>
				<TabbarItem
					onClick={()=>setActiveStory('map')}
					selected={activeStory === 'map'}
					data-story="map"
					text="Карта"
				><Icon28Search /></TabbarItem>
				<TabbarItem
					onClick={()=>setActiveStory('add')}
					selected={activeStory === 'add'}
					data-story="add"
					text="Добавить"
				><Icon28AddOutline /></TabbarItem>
			</Tabbar>
		}>
			<View id="map" activePanel="map">
				<Panel id="map">
					<PanelHeader>Карта</PanelHeader>
					<MapComponent/>
				</Panel>
			</View>
			<View id="add" activePanel="add">
				<Panel id="add">
					<PanelHeader>Добавить</PanelHeader>
					<Add/>
				</Panel>
			</View>
		</Epic>
	);
};

export default App;

