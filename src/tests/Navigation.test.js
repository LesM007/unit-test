import { render, screen, cleanup, within } from "@testing-library/react";
import Navigation from "../components/Navigation";

describe("Navigation Component", () => {
    afterEach(cleanup)

    /*it("renders navigation element", () =>{
        render(<Navigation />)
        const navElement = screen.getByRole('navigation')
        expect(navElement).toBeInTheDocument()
    })*/
    
    it("renders ul element in a nav tag", () =>{
        render(<Navigation />)
        const listElement = screen.getByRole('list')
        expect(listElement.parentElement.tagName).toBe("NAV") //linje 7-11 giver det samme
    })

    it("renders list-items within list", () => {
        render(<Navigation />)
        const listItems = screen.getAllByRole("listitem")
        listItems.forEach(listItem => 
            expect(listItem.parentElement.tagName).toBe("UL")
        )
    })

    it("renders a list-item 'about' in a list-item", () =>{
        render(<Navigation />)
        const aboutLink = screen.getByRole('link', {name:/about/i})
        expect(aboutLink.parentElement.tagName).toBe("LI")
    })

    it("renders a list-item 'contact' in a list-item", () =>{
        render(<Navigation />)
        const contactLink = screen.getByRole('link', {name:/contact/i})
        expect(contactLink.parentElement.tagName).toBe("LI")
    })

})
