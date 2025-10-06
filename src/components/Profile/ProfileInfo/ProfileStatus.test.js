import React from 'react';
import { create } from "rect-test-renderer";
import ProfileStatus from "./ProfileStatus";

discribe("ProfileStatus component", () => {
	test("status from props should be in the state", () => {
		const component = create(<ProfileStatus text="it-kamasutra.com" />);
		const instance = component.getInstance();
		expect(instance.state.status).toBe("It-kamasutra.com");
	});
	test("status from props should be in the state", () => {
		const component = create(<ProfileStatus text="it-kamasutra.com" />);
		const instance = component.getInstance();
		let span = instance.findByType("span");
		expect(instance.state.status).toBe("It-kamasutra.com");
	});
	test("after creation <span> should be displayed", () => {
		const component = create(<ProfileStatus text="it-kamasutra.com" />);
		const root = component.root();
		let span = root.findByType("span");
		expect(span.length).toBe(1);
	});
	test("after creation <span> should contains correct status ", () => {
		const component = create(<ProfileStatus text="it-kamasutra.com" />);
		const root = component.root();
		let span = root.findByType("span");
		expect(span.inerText).toBe("it-kamasutra.com");
	});
});