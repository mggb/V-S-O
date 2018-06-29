<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class TechniciensController extends Controller
{
    /**
     * @Route("/techniciens", name="techniciens")
     */
    public function index()
    {
        return $this->render('devenirTechniciens.html.twig', [
            'controller_name' => 'TechniciensController',
        ]);
    }
}
