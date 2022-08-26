import * as d3 from 'd3';
export default function Markers()
{
    var arrowPoints = [[0, 0], [0, 20], [20, 10]];
    var markerBoxWidth = 20;
    var markerBoxHeight = 20;
    var refX =  markerBoxWidth / 2;
    var refY =  markerBoxWidth / 2;
    const getMarker = (event) =>
    {
        event.preventDefault();
        console.log("inside Markers")
        const svg = d3.select('#main')
            .append('svg')
            .attr('viewBox', [0, 0, 800, 200]);
        // See https://developer.mozilla.org/en-US/docs/Web/SVG/Element/marker
        svg
            .append('defs')
            .append('marker')
            .attr('id', 'arrow')
            .attr('viewBox', [0, 0, markerBoxWidth, markerBoxHeight])
            .attr('refX', refX)
            .attr('refY', refY)
            .attr('markerWidth', markerBoxWidth)
            .attr('markerHeight', markerBoxHeight)
            .attr('orient', 'auto-start-reverse')
            .append('path')
            .attr('d', d3.line()(arrowPoints))
            .attr('stroke', 'black');

        svg
            .append('path')
            // M100,90L200,200
            .attr('d', d3.line()([[100,90], [200, 200]]))
            .attr('stroke', 'black')
            .attr('marker-start', 'url(#arrow)')
            .attr('fill', 'none');

        // return svg.node();
    }
    return (
        <div id="main" onClick={(event) => getMarker(event)}> Hello Markers
        </div>
    );
}