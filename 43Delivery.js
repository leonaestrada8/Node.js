class DeliveryRoute {
    constructor(start, destination, distance, time) {
        this.start = start;
        this.destination = destination;
        this.distance = distance;
        this.time = time;
    }
}

class RoutingSystem {
    constructor() {
        this.routes = [];
    }

    addRoute(route) {
        this.routes.push(route);
    }

    calculateEfficientRoute(start, destination, criteria) {
        let efficientRoute = null;

        for (const route of this.routes) {
            if (route.start === start && route.destination === destination) {
                if (efficientRoute === null) {
                    efficientRoute = route;
                    continue;
                }
                if (criteria === "distance" && route.distance < efficientRoute.distance) {
                    efficientRoute = route;
                } else if (criteria === "time" && route.time < efficientRoute.time) {
                    efficientRoute = route;
                }
            }
        }

        return efficientRoute;
    }
}

const system = new RoutingSystem();
system.addRoute(new DeliveryRoute("A", "B", 100, 60));
system.addRoute(new DeliveryRoute("A", "B", 120, 50));
system.addRoute(new DeliveryRoute("A", "C", 150, 80));

const efficientRouteByDistance = system.calculateEfficientRoute("A", "B", "distance");
console.log(`Efficient route by distance: ${efficientRouteByDistance.distance} km`);

const efficientRouteByTime = system.calculateEfficientRoute("A", "B", "time");
console.log(`Efficient route by time: ${efficientRouteByTime.time} minutes`);


