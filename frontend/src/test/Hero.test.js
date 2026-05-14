import React from "react";
import {render, screen } from '@testing-library/react';

import Hero from '../landing_page/home/Hero';



    test("renders hero image", () => {
        render(<Hero/>);
        const heroImage = screen.getByRole("img");
        expect(heroImage).not.toBeNull();
        expect(heroImage.getAttribute("src")).not.toBeNull();
    });