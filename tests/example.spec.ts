import { test, expect } from '@playwright/test';

let nombre: string ='Amelia';
let apellido1: string = 'Soto';
let apellido2: string = 'Gordillo';

test('Registro de empleado en orange HRM', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.fill('input[name="username"]', 'Admin');  
  await page.fill('input[name="password"]', 'admin123'); 
  await page.click('button[type="submit"]');

  await page.waitForSelector('text=Dashboard');

  await page.click('a[href="/web/index.php/pim/viewPimModule"]');
  await page.waitForSelector('text=Employee Information');

  // Agregar empleado
  await page.locator('xpath=//a[contains(text(),"Add Employee")]').click();  
  await page.waitForSelector('xpath=//input[@name="firstName"]'); 

  await page.fill('input[name="firstName"]', nombre);
  await page.fill('input[name="middleName"]', apellido1);
  await page.fill('input[name="lastName"]', apellido2); 

  await page.click('span[class="oxd-switch-input oxd-switch-input--active --label-right"]');
  
  await page.fill('xpath=//label[contains(text(),"Username")]//..//..//div//input', 'amelia123');
  await page.fill('xpath=//label[text()="Password"]//..//..//div//input', 'Password123!');
  await page.fill('xpath=//label[text()="Confirm Password"]//..//..//div//input', 'Password123!');

  await page.click('button[type="submit"]');

  await page.waitForSelector('text=Success'); 

  await page.locator('xpath=//a[contains(text(),"Employee List")]').click();
  await page.fill('input[placeholder="Type for hints..."]', nombre+' '+apellido1+' '+apellido2);
  await page.locator('xpath=//button[@type="submit"]').click();

  await page.waitForSelector('xpath=//div[@role="columnheader" and text()="Id"]');
  //const empleadoExiste = await page.isVisible('text=Carlos Pérez');

  await expect(page.locator('xpath=//div[@class="oxd-table-row oxd-table-row--with-border oxd-table-row--clickable"]//div[3]//div[text()="Amelia Soto"]')).toHaveText(nombre+' '+apellido1);

  await page.close();
  
});