import * as d3 from 'd3';
import React, {Component} from 'react';
import Neo4jGraph from '../Neo4jGraph';

var links = [
    {source: 'Baratheon', target: 'Lannister'},
    {source: 'Baratheon', target: 'Stark'},
    {source: 'Lannister', target: 'Stark'}
]
var nodes = [
    {name: "Baratheon"},
    {name: "Lannister"},
    {name: "Stark"}
]

const drawChart = () => 
{
    const width = 960;
    const height = 500;
    const colors = d3.scaleOrdinal(d3.schemeCategory10);
    var arrowPoints = [[0, 0], [0, 20], [20, 10]];
    var markerBoxWidth = 20;
    var markerBoxHeight = 20;
    var refX =  markerBoxWidth / 2;
    var refY =  markerBoxWidth / 2;
    const svg = d3.select('#graph')
    .append('svg')
    .on('contextmenu', () => { d3.event.preventDefault(); })
    .attr('width', width)
    .attr('height', height);

    svg
            .append('defs')
            .append('marker')
            .attr('id', 'arrow')
            .attr('viewBox', [0, 0, 100, 100])
            .attr('refX', 20)
            .attr('refY', 20)
            .attr('markerWidth', markerBoxWidth)
            .attr('markerHeight', markerBoxHeight)
            .attr('orient', 'auto-start-reverse')
            .append('path')
            .attr('d', d3.line()(arrowPoints))
            .attr('stroke', 'black');

        var textsAndNodes = svg.append("g")
            .selectAll("g")
            .data(nodes)
            .enter()
            .append("g");
        
        var circles = textsAndNodes.append('circle')
            .attr("fill","aquamarine")
            .attr("r", 20);

}

export default function Neo4jGraph_v1() {
    return (<div id="graph" onClick={(event) => drawChart(event)}>CLCK me</div>);
}