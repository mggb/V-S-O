<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\PlaneteRepository;

class CatalogueplaneteController extends Controller
{

    /**
     * @Route("/catalogueplanete", name="catalogueplanete", methods="GET")
     */
    public function index(Request $request, PlaneteRepository $planeteRepository): Response
    {

        return $this->render('catalogueplanete.html.twig', [
            'controller_name' => 'FrontPlaneteController',
            'title' => 'planete',
            'planetes' => $planeteRepository->findAll()
        ]);
    }

    /**
     * @Route("/post/{id}", name="post_planete", methods="GET|POST")
     */
    public function postShow($id, PlaneteRepository $planeteRepository): Response
    {

        return $this->render('detailPlanete.html.twig', [
            'controller_name' => 'Info',
            'title' => 'planete',
            'planetes' => $planeteRepository->findById($id)]);
    }

}
