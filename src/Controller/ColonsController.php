<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ColonsController extends Controller
{
    /**
     * @Route("/colons", name="colons")
     */
    public function index()
    {
        return $this->render('conditionsGenerales.html.twig', [
            'controller_name' => 'ColonsController',
        ]);
    }

    /**
     * @Route("/envois", name="envois")
     */
    public function show()
    {
        return $this->render('colonFelicitation.html.twig', [
            'controller_name' => 'ColonsController',
        ]);
    }
}
